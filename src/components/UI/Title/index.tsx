interface TitleProps {
  value: string
}

export const Title: React.FC<TitleProps> = ({ value }) => {
  return <h2 className="title-header">{value}</h2>
}
