//#region node_modules/.pnpm/file-selector@4.1.0/node_modules/file-selector/dist/mime-default.js
/**
* A small set of the most common file extensions, bundled into the main entry so that
* {@link fromEvent} guesses a MIME type for typeless files out of the box.
*
* This is the single source of truth for these defaults: the full extension-to-MIME table
* (`COMMON_MIME_TYPES`, exposed via the `file-selector/mime` subpath) spreads this map in
* rather than redefining these entries, so no value is duplicated across modules.
*
* See https://github.com/react-dropzone/file-selector/issues/127
*/
var DEFAULT_MIME_TYPES = /* @__PURE__ */ new Map([
	["avif", "image/avif"],
	["bmp", "image/bmp"],
	["css", "text/css"],
	["csv", "text/csv"],
	["doc", "application/msword"],
	["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
	["gif", "image/gif"],
	["gz", "application/gzip"],
	["htm", "text/html"],
	["html", "text/html"],
	["ico", "image/x-icon"],
	["jpeg", "image/jpeg"],
	["jpg", "image/jpeg"],
	["js", "application/javascript"],
	["json", "application/json"],
	["md", "text/markdown"],
	["mjs", "application/javascript"],
	["mp3", "audio/mpeg"],
	["mp4", "video/mp4"],
	["ogg", "audio/ogg"],
	["pdf", "application/pdf"],
	["png", "image/png"],
	["ppt", "application/powerpoint"],
	["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
	["svg", "image/svg+xml"],
	["tif", "image/tiff"],
	["tiff", "image/tiff"],
	["txt", "text/plain"],
	["wasm", "application/wasm"],
	["wav", "audio/x-wav"],
	["weba", "audio/webm"],
	["webm", "video/webm"],
	["webp", "image/webp"],
	["xls", "application/vnd.ms-excel"],
	["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
	["xml", "application/xml"],
	["zip", "application/zip"]
]);
//#endregion
//#region node_modules/.pnpm/file-selector@4.1.0/node_modules/file-selector/dist/index.js
var UnexpectedObjectError = class extends Error {
	constructor(item) {
		super("DataTransferItem is not a file");
		this.item = item;
		this.name = "UnexpectedObjectError";
	}
};
function toFileWithPath(file, path, h) {
	const f = file;
	const { webkitRelativePath } = file;
	const p = typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : `./${file.name}`;
	if (typeof f.path !== "string") setObjProp(f, "path", p);
	if (h !== void 0) Object.defineProperty(f, "handle", {
		value: h,
		writable: false,
		configurable: false,
		enumerable: true
	});
	setObjProp(f, "relativePath", p);
	return f;
}
/**
* Sets a File's `type` from its extension using the provided `mimeTypes` lookup,
* but only when the browser didn't already set a type. Returns the same File.
*/
function withMimeType(file, mimeTypes = DEFAULT_MIME_TYPES) {
	const { name } = file;
	if (name && name.lastIndexOf(".") !== -1 && !file.type) {
		const ext = name.split(".").pop().toLowerCase();
		const type = mimeTypes.get(ext);
		if (type) Object.defineProperty(file, "type", {
			value: type,
			writable: false,
			configurable: false,
			enumerable: true
		});
	}
	return file;
}
function setObjProp(f, key, value) {
	Object.defineProperty(f, key, {
		value,
		writable: false,
		configurable: false,
		enumerable: true
	});
}
var FILES_TO_IGNORE = [".DS_Store", "Thumbs.db"];
/**
* Convert a DragEvent's DataTrasfer object to a list of File objects
* NOTE: If some of the items are folders,
* everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
*
* A https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent (e.g. a paste of a screenshot)
* is also supported: its files are read from {clipboardData}.
*
* EXPERIMENTAL: A list of https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle objects can also be passed as an arg
* and a list of File objects will be returned.
*
* @param evt
* @param options
*/
async function fromEvent(evt, { mimeTypes = DEFAULT_MIME_TYPES } = {}) {
	return (await getFilesOrItems(evt)).map((item) => item instanceof File ? withMimeType(item, mimeTypes) : item);
}
async function getFilesOrItems(evt) {
	if (isObject(evt) && isDataTransfer(evt.dataTransfer)) return getDataTransferFiles(evt.dataTransfer, evt.type);
	else if (isClipboardEvt(evt)) return getClipboardFiles(evt.clipboardData);
	else if (isChangeEvt(evt)) return getInputFiles(evt);
	else if (Array.isArray(evt) && evt.every((item) => "getFile" in item && typeof item.getFile === "function")) return getFsHandleFiles(evt);
	return [];
}
function isDataTransfer(value) {
	return isObject(value);
}
function isClipboardEvt(value) {
	return isObject(value) && isDataTransfer(value.clipboardData);
}
function isChangeEvt(value) {
	return isObject(value) && isObject(value.target);
}
function isObject(v) {
	return typeof v === "object" && v !== null;
}
function getInputFiles(evt) {
	return fromList(evt.target.files).map((file) => toFileWithPath(file));
}
async function getFsHandleFiles(handles) {
	return (await Promise.all(handles.map((h) => h.getFile()))).map((file) => toFileWithPath(file));
}
async function getDataTransferFiles(dt, type) {
	const items = fromList(dt.items).filter((item) => item.kind === "file");
	if (type !== "drop") return items;
	return noIgnoredFiles(flatten(await Promise.all(items.map(toFilePromises))));
}
function getClipboardFiles(dt) {
	const fromItems = fromList(dt.items).filter((item) => item.kind === "file").map((item) => item.getAsFile()).filter((file) => file !== null);
	return noIgnoredFiles((fromItems.length > 0 ? fromItems : fromList(dt.files)).map((file) => toFileWithPath(file)));
}
function noIgnoredFiles(files) {
	return files.filter((file) => FILES_TO_IGNORE.indexOf(file.name) === -1);
}
function fromList(items) {
	if (items === null) return [];
	return Array.from(items);
}
async function toFilePromises(item) {
	if (typeof item.webkitGetAsEntry !== "function") return fromDataTransferItem(item);
	const entry = item.webkitGetAsEntry();
	if (entry?.isDirectory) {
		const handle = await getFsHandle(item);
		if (handle?.kind === "directory") return fromDirHandle(handle, `/${handle.name}`);
		return fromDirEntry(entry);
	}
	return fromDataTransferItem(item, entry);
}
function flatten(items) {
	const result = [];
	for (const item of items) if (Array.isArray(item)) result.push(...flatten(item));
	else result.push(item);
	return result;
}
async function fromDataTransferItem(item, entry) {
	const syncFile = item.getAsFile();
	const h = await getFsHandle(item);
	if (h !== null && h !== void 0) {
		const file = syncFile ?? await h.getFile();
		file.handle = h;
		return toFileWithPath(file);
	}
	if (!syncFile) throw new UnexpectedObjectError(item);
	return toFileWithPath(syncFile, entry?.fullPath ?? void 0);
}
async function getFsHandle(item) {
	if (globalThis.isSecureContext && typeof item.getAsFileSystemHandle === "function") return item.getAsFileSystemHandle();
}
async function fromDirHandle(handle, path) {
	const files = [];
	for await (const child of handle.values()) {
		const childPath = `${path}/${child.name}`;
		if (child.kind === "directory") files.push(...await fromDirHandle(child, childPath));
		else {
			const file = await child.getFile();
			files.push(toFileWithPath(file, childPath, child));
		}
	}
	return files;
}
async function fromEntry(entry) {
	return entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry);
}
function fromDirEntry(entry) {
	const reader = entry.createReader();
	return new Promise((resolve, reject) => {
		const entries = [];
		function readEntries() {
			reader.readEntries(async (batch) => {
				if (!batch.length) try {
					resolve(await Promise.all(entries));
				} catch (err) {
					reject(err);
				}
				else {
					const items = Promise.all(batch.map(fromEntry));
					entries.push(items);
					readEntries();
				}
			}, (err) => {
				reject(err);
			});
		}
		readEntries();
	});
}
async function fromFileEntry(entry) {
	return new Promise((resolve, reject) => {
		entry.file((file) => {
			resolve(toFileWithPath(file, entry.fullPath));
		}, (err) => {
			reject(err);
		});
	});
}
//#endregion
export { fromEvent as t };
