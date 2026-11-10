// The spotter's log: which "look for" cues a visitor has ticked off, kept in this browser only.
const KEY = 'lc-spotted-v1';
export type Log = Record<string, number[]>;

export function readLog(): Log {
  try {
    const raw = localStorage.getItem(KEY);
    const v = raw ? JSON.parse(raw) : {};
    return v && typeof v === 'object' ? v : {};
  } catch {
    return {};
  }
}
export function writeLog(log: Log) {
  try { localStorage.setItem(KEY, JSON.stringify(log)); } catch {}
}
