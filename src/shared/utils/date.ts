export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    ...options,
  });
}

export function getDuration(startDate: Date, endDate?: Date): string {
  const start = new Date(startDate);
  const end = endDate || new Date();
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  if (months < 12) return `${months} mo`;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return remainingMonths > 0 ? `${years}y ${remainingMonths}mo` : `${years}y`;
}
