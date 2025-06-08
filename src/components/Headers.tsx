export default function Headers({text, className}: {text: string, className?: string}) {
    return <p className={`font-[family-name:var(--font-lavishly)] md:text-[30pt] text-[25pt] ${className} mb-[0.2em]`}>
        {text}
    </p>
}