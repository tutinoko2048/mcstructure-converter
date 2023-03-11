// https://maku.blog/p/jbv7gox/

import * as React from 'react';
import { GlobalSnackbar } from './GlobalSnackbar';

/** スナックバーの表示状態を管理するコンテキストオブジェクト */
export const SnackbarContext = React.createContext({
  message: '', // デフォルト値
  severity: 'error', // デフォルト値
  // eslint-disable-next-line
  showSnackbar: (_message, _severity) => {}, // ダミー関数
})

  /**
   * SnackbarContext コンテキストオブジェクトを提供するコンポーネント。
   *
   * このコンポーネント以下に配置した子コンポーネントであれば、
   * useSnackbar フック関数を呼び出すことができます。
   */
export const SnackbarContextProvider = ({ children }) => {
  const context = React.useContext(SnackbarContext);
  const [message, setMessage] = React.useState(context.message);
  const [severity, setSeverity] = React.useState(context.severity);

  // コンテクストオブジェクトに自分自身の値を変更する関数をセットする
  const newContext = React.useMemo(
    () => ({
      message,
      severity,
      showSnackbar: (message, severity) => {
        setMessage(message);
        setSeverity(severity);
      },
    }),
    [message, severity, setMessage, setSeverity]
  );

  // スナックバーを閉じるためのハンドラー関数
  const handleClose = React.useCallback(() => {
    setMessage('');
  }, [setMessage]);

  return (
    <SnackbarContext.Provider value={newContext}>
      {children}
      <GlobalSnackbar
        open={newContext.message !== ''}
        message={newContext.message}
        severity={newContext.severity}
        onClose={handleClose}
      />
    </SnackbarContext.Provider>
  )
}

/** SnackbarContext を簡単に使うためのユーティリティ関数 */
export function useSnackbar() {
  return React.useContext(SnackbarContext);
}