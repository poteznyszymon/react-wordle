import { words } from "./wordsList"

export const randomWord = (): string => {
    return words[Math.floor(Math.random() * words.length)];
}

export const isWordValid = (word: string): boolean => {
    return words.includes(word.toLowerCase());
}