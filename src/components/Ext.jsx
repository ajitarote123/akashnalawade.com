export default function Ext({ href, children, className }) {
  return (
    <a href={href} className={className} rel="noreferrer" target="_blank">
      {children}
    </a>
  )
}
