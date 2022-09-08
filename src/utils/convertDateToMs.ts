export default function convertDateToMs(dateString: string): number {
    if (!dateString) return Date.now();
    // Converts string date to time since epoch equivalent.
    const dateInMs = new Date(dateString).getTime();
    return dateInMs;
}
