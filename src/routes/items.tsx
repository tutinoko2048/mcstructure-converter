import { createFileRoute } from "@tanstack/react-router";

import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  MenuItem,
  Paper,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Accordion, AccordionSummary } from "../components/Accordion";
import { Header } from "../components/Header";
import { createEnchant, createItem, EnchantmentTypes, type NbtValue, writeStructure } from "../nbt";
import { useSnackbar } from "../snackbar/Snackbar";
import template from "../chest_structure.json";

const MAX_COUNT = 27;
type Tag = { value: unknown; type?: string };
type Item = Record<string, Tag>;
const asItem = (value: NbtValue) => value as Item;

export const Route = createFileRoute("/items")({
  component: ItemGenerator,
});

function ItemGenerator() {
  const { showSnackbar } = useSnackbar();
  const [items, setItems] = useState<Item[]>([asItem(createItem("minecraft:diamond"))]);
  const [expanded, setExpanded] = useState<number | false>(false);
  const [fileName, setFileName] = useState("export");
  const debugTree = useMemo(() => JSON.stringify(items, null, 2), [items]);

  const mutateItem = (index: number, mutate: (item: Item) => void) => {
    setItems((current) =>
      current.map((item, currentIndex) => {
        if (currentIndex !== index) return item;
        const next = structuredClone(item);
        mutate(next);
        return next;
      }),
    );
  };
  const addItem = () => {
    if (items.length >= MAX_COUNT)
      return showSnackbar(`The max size of container is ${MAX_COUNT}`, "error");
    setItems((current) => [...current, asItem(createItem())]);
    setExpanded(items.length);
  };
  const removeItem = (index: number) => {
    setItems((current) =>
      current
        .filter((_, itemIndex) => itemIndex !== index)
        .map((item, itemIndex) => ({ ...item, Slot: { ...item.Slot, value: itemIndex } })),
    );
    setExpanded(false);
  };
  const exportStructure = () => {
    try {
      const data = createStructureData(items);
      download(writeStructure(data), `${fileName || "export"}.mcstructure`);
    } catch (error) {
      showSnackbar(String(error), "error");
    }
  };
  const exportJson = () => {
    const data = createStructureData(items);
    download(
      URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })),
      `${fileName || "export"}.json`,
    );
  };

  return (
    <>
      <Header name="Item Generator" pageId="items" />
      <Box component="main" sx={{ px: { xs: 2, sm: 3 }, pb: 5, maxWidth: 900, mx: "auto" }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            Item generator
          </Typography>
          <Typography color="text.secondary">
            Edit the items to be stored in the chest:
          </Typography>
        </Box>
        <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 } }}>
          <Stack direction="row" spacing={2} component="div">
            <Typography variant="h6" gutterBottom>
              Items ({items.length}/{MAX_COUNT})
            </Typography>
            <Button startIcon={<AddIcon />} variant="contained" onClick={addItem}>
              Add item
            </Button>
          </Stack>
          <List sx={{ py: 2 }}>
            {items.map((item, index) => (
              <ItemPanel
                key={index}
                item={item}
                index={index}
                expanded={expanded === index}
                onExpand={() => setExpanded(expanded === index ? false : index)}
                onDelete={() => removeItem(index)}
                onMutate={mutateItem}
              />
            ))}
          </List>
          <Divider />
          <Stack spacing={1} sx={{ mt: 3, alignItems: "flex-start" }}>
            <TextField
              label="File name"
              size="small"
              value={fileName}
              onChange={(event) => setFileName(event.target.value)}
            />
            <Button variant="contained" size="small" onClick={exportStructure}>
              Export as structure
            </Button>
            <Button variant="contained" size="small" onClick={exportJson}>
              Export as JSON
            </Button>
          </Stack>
        </Paper>
        <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, mt: 3 }}>
          <Typography variant="h6">Debug view</Typography>
          <Box
            component="pre"
            sx={{ overflow: "auto", maxHeight: 360, p: 2, bgcolor: "rgba(0, 0, 0, 0.24)", border: 1, borderColor: "divider", borderRadius: 1, fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace", fontSize: 12 }}
          >
            {debugTree}
          </Box>
        </Paper>
        <Box sx={{ mt: 4, textAlign: "center", color: "text.secondary", fontSize: 14 }}>
          <a href="https://github.com/tutinoko2048/mcstructure-converter">GitHub</a>
        </Box>
      </Box>
    </>
  );
}

function ItemPanel({
  item,
  index,
  expanded,
  onExpand,
  onDelete,
  onMutate,
}: {
  item: Item;
  index: number;
  expanded: boolean;
  onExpand: () => void;
  onDelete: () => void;
  onMutate: (index: number, mutate: (item: Item) => void) => void;
}) {
  const tag = item.tag.value as Record<string, Tag>;
  const display = tag.display.value as Record<string, Tag>;
  const itemId = String(item.Name.value ?? "");
  const itemName = String(display.Name?.value ?? "");
  const lore = (display.Lore?.value as { value?: string[] } | undefined)?.value ?? [];
  const enchants = (tag.ench?.value as { value?: Item[] } | undefined)?.value ?? [];
  const unbreakable = Boolean(tag.Unbreakable?.value);
  const setLore = (next: string[]) =>
    onMutate(index, (nextItem) => {
      const nextDisplay = (nextItem.tag.value as Record<string, Tag>).display.value as Record<
        string,
        Tag
      >;
      nextDisplay.Lore = next.length
        ? { type: "list", value: { type: "string", value: next } }
        : undefined as unknown as Tag;
      if (!next.length) delete nextDisplay.Lore;
    });
  const setEnchants = (next: Item[]) =>
    onMutate(index, (nextItem) => {
      const nextTag = nextItem.tag.value as Record<string, Tag>;
      nextTag.ench = next.length
        ? { type: "list", value: { type: "compound", value: next } }
        : undefined as unknown as Tag;
      if (!next.length) delete nextTag.ench;
    });

  return (
    <Accordion expanded={expanded} onChange={onExpand} sx={{ maxWidth: "100%" }}>
      <AccordionSummary>
        <Typography sx={{ flexGrow: 1, fontWeight: "bold" }}>{itemId || "-"}</Typography>
        <IconButton
          size="small"
          aria-label={`Delete ${itemId || "item"}`}
          onClick={(event) => {
            event.stopPropagation();
            onDelete();
          }}
        >
          <CloseIcon />
        </IconButton>
      </AccordionSummary>
      <Stack spacing={2} sx={{ p: 2 }}>
        <TextField
          label="Identifier"
          size="small"
          value={itemId}
          onChange={(event) =>
            onMutate(index, (next) => {
              next.Name.value = event.target.value;
            })
          }
        />
        <TextField
          label="Name"
          size="small"
          value={itemName}
          onChange={(event) =>
            onMutate(index, (next) => {
              const nextDisplay = (next.tag.value as Record<string, Tag>).display.value as Record<
                string,
                Tag
              >;
              if (event.target.value) nextDisplay.Name = { type: "string", value: event.target.value };
              else delete nextDisplay.Name;
            })
          }
        />
        <Box>
          <Typography component="span">Lore</Typography>{" "}
          <IconButton size="small" onClick={() => setLore([...lore, ""])}>
            <AddIcon />
          </IconButton>
          {lore.map((line, loreIndex) => (
            <Stack key={loreIndex} direction="row" spacing={1} sx={{ mt: 1 }}>
              <TextField
                multiline
                size="small"
                fullWidth
                value={line}
                onChange={(event) =>
                  setLore(
                    lore.map((value, currentIndex) =>
                      currentIndex === loreIndex ? event.target.value : value,
                    ),
                  )
                }
              />
              <IconButton
                aria-label="Delete lore"
                onClick={() =>
                  setLore(lore.filter((_, currentIndex) => currentIndex !== loreIndex))
                }
              >
                <CloseIcon />
              </IconButton>
            </Stack>
          ))}
        </Box>
        <Box>
          <Typography component="span">Enchantments</Typography>{" "}
          <IconButton
            size="small"
            onClick={() => setEnchants([...enchants, asItem(createEnchant())])}
          >
            <AddIcon />
          </IconButton>
          {enchants.map((enchant, enchantIndex) => (
            <Stack
              key={enchantIndex}
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              sx={{ mt: 1 }}
            >
              <Select
                size="small"
                value={Number(enchant.id.value ?? "")}
                displayEmpty
                onChange={(event) =>
                  setEnchants(
                    enchants.map((value, currentIndex) =>
                      currentIndex === enchantIndex
                        ? { ...value, id: { ...value.id, value: Number(event.target.value) } }
                        : value,
                    ),
                  )
                }
              >
                <MenuItem value="" disabled>
                  Select enchantment
                </MenuItem>
                {Object.entries(EnchantmentTypes).map(([id, name]) => (
                  <MenuItem key={id} value={Number(id)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                label="Level"
                size="small"
                type="number"
                value={enchant.lvl.value ?? ""}
                onChange={(event) =>
                  setEnchants(
                    enchants.map((value, currentIndex) =>
                      currentIndex === enchantIndex
                        ? {
                            ...value,
                            lvl: {
                              ...value.lvl,
                              value: event.target.value === "" ? null : Number(event.target.value),
                            },
                          }
                        : value,
                    ),
                  )
                }
              />
              <IconButton
                aria-label="Delete enchantment"
                onClick={() =>
                  setEnchants(enchants.filter((_, currentIndex) => currentIndex !== enchantIndex))
                }
              >
                <CloseIcon />
              </IconButton>
            </Stack>
          ))}
        </Box>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Typography>Unbreakable</Typography>
          <Switch
            checked={unbreakable}
            onChange={(event) =>
              onMutate(index, (next) => {
                const nextTag = next.tag.value as Record<string, Tag>;
                if (event.target.checked) nextTag.Unbreakable = { type: "byte", value: 1 };
                else delete nextTag.Unbreakable;
              })
            }
          />
        </Stack>
      </Stack>
    </Accordion>
  );
}

function createStructureData(items: Item[]) {
  const data = structuredClone(template) as any;
  const blockEntity = data.value.structure.value.palette.value.default.value.block_position_data.value["0"].value.block_entity_data.value;
  blockEntity.Items.value.value = items;
  return data;
}

function download(url: string, fileName: string) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}
