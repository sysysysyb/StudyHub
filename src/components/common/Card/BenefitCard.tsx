interface BenefitCardProps {
  iconbgcolor: string
  icon: React.ReactNode
  title: string
  comments: string[]
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  iconbgcolor,
  icon,
  title,
  comments,
}) => {
  return (
    <div className="flex h-54 w-96 flex-col items-center p-6">
      <div
        className={`${iconbgcolor} mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full`}
      >
        {icon}
      </div>
      <div className="text-heading4 pb-3 text-gray-900">{title}</div>
      {comments && comments.length > 0
        ? comments.map((comment, index) => (
            <span key={index} className="text-secondary">
              {comment}
            </span>
          ))
        : null}
    </div>
  )
}
