'use client'
import colors from "@/helpers/colors"

export default function ButtonDisplay({ text, bg = true, onclick, py="py-3", px="px-5" }: { text: string, onclick: string, py?: string, px?: string, bg?: boolean }) {
    const color = colors()
    return (
        <button
            onClick={() => console.log(onclick)}
            style={{ backgroundColor: bg? color.primaryColor: color.headerText }}
            className={`text-white ${px} ${py} font-[600] rounded-[1.2em] hover:bg-blue-600 transition duration-300`}>
            {text}
        </button>
    )
}