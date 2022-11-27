// 粗体
export function bold(text: string): string {
  // return value
  return "\x1b[1m" + text + "\x1b[0m";
}

// 变淡
export function faint(text: string): string {
  // return value
  return "\x1b[2m" + text + "\x1b[0m";
}

// 青色
export function cyan(text: string): string {
  // return value
  return "\x1b[36m" + text + "\x1b[0m";
}

// 绿色
export function green(text: string): string {
  // return value
  return "\x1b[32m" + text + "\x1b[0m";
}

// 红色
export function red(text: string): string {
  // return value
  return "\x1b[31m" + text + "\x1b[0m";
}

// 黄色
export function yellow(text: string): string {
  // return value
  return "\x1b[33m" + text + "\x1b[0m";
}
