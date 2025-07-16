function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const sCount: Record<string, number> = {};
    const tCount: Record<string, number> = {};

    for (let i = 0; i < s.length; i++) {
        const sc = s[i].toLowerCase();
        const tc = t[i].toLowerCase();

        sCount[sc] = (sCount[sc] || 0) + 1;
        tCount[tc] = (tCount[tc] || 0) + 1;
    }

    for (const char in sCount) {
        if (sCount[char] !== tCount[char]) {
            return false;
        }
    }

    return true;
};

console.log("anagram");