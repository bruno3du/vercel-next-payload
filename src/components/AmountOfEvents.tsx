interface AmountOfEventsProps {
  title: string;
  quantity: number;
  cities: {
    id: string;
    label: string;
    value: string;
  }[];
}
export default function AmountOfEvents({
  quantity,
  title,
  cities,
}: AmountOfEventsProps) {
  return (
    <div className="soon">
      <span>
        <p>👇</p>
        <div>
          <h2>{title}</h2>
          compteur d&apos;events par section
          <p className="">{`${quantity} évents`}</p>
        </div>
        <p>👇</p>
      </span>
      <select className="hidden" name="cities">
        <option>Filtre</option>
        {cities.map((city) => (
          <option value={city.value} key={city.id}>
            {city.label}
          </option>
        ))}
      </select>
    </div>
  );
}
