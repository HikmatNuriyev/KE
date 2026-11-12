export function openChat() {
  if (typeof window === "undefined") return;
  if (typeof window.openSoft10Livechat === "function") {
    window.openSoft10Livechat();
    return;
  }
  document.getElementById("chatBubble")?.click();
}
