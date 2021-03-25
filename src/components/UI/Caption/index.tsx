interface CaptionProps {
  value: string
}

export const Caption: React.FC<CaptionProps> = ({ value }) => {
  return <p className="caption">{value}</p>
}
