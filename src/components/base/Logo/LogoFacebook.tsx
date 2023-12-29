import Link                       from 'next/link'

interface LogoFacebookProps {
  href: string,
  text: string,
  width:number,
  height:number,
  color:string
}

export const LogoFacebook = ({ href,  text, width, height, color }: LogoFacebookProps) => {

  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <section className="flex sm:flex-col p-4 sm:items-center">
        <svg
          width={width} height={height} viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none" stroke={color} strokeLinecap="round"
            strokeLinejoin="round"
            d="M.5 12.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3V8.76h.71a.61.61 0 0 0 .61-.61v-.77a.61.61 0 0 0-.61-.61h-.67v-.94c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18a.58.58 0 0 0 .18-.43v-.74a.62.62 0 0 0-.6-.64H9.65a2.32 2.32 0 0 0-2.39 2.6v1.17h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.74H1.5a1 1 0 0 1-1-1Z"
          />
        </svg>
        <p>{text}</p>
      </section>
    </Link>
  )
}
