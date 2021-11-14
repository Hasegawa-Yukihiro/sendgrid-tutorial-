import { page } from "./Page";

// （残）SignInPage未実装のため仮でShiftページ
export function redirectSignInPage() {
  window.location.href = page.home.pathname;
}
