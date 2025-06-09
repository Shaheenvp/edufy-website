export default function Headers({text, className}: {text: string, className?: string}) {
    return <p className={`font-[family-name:var(--font-poppins)] font-[800] md:text-[35pt] text-[25pt] ${className} mb-[0.2em]`}>
        {text}
    </p>
}