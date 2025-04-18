import { IHabilityCard } from "@/types/IHabilityCard";

export default function HabilityCard({
  title,
  icon,
  description,
  subtitle1,
  technologies,
  subtitle2,
  tools,
  onClick,
}: IHabilityCard) {
  return (
    <article
      className="max-w-lg p-15 bg-amber-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
      onClick={onClick}
    >
      <figure className="mb-4 text-6xl text-blue-500 flex justify-center">
        {icon}
      </figure>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600 mb-4 text-2xl">{description}</p>
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">{subtitle1}</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4 inline-block text-xl">
          {technologies.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">{subtitle2}</h3>
        <ul className="list-disc list-inside text-gray-600 inline-block text-xl">
          {tools.map((tool, index) => (
            <p key={index}>{tool}</p>
          ))}
        </ul>
      </div>
    </article>
  );
}