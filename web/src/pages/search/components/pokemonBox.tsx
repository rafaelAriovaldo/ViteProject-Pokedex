interface PokemonBoxProps {
  name: string;
  numberPokedex: number;
  img: string;
}

export function PokemonBox(props: PokemonBoxProps) {
  return (
    <a className="relative rounded-lg overflow-hidden">
      <img src={props.img} />
      <div className="">
        <strong className="w-1 h-1">
          N°:{props.numberPokedex}. Nome:{props.name}.
        </strong>
      </div>
    </a>
  );
}
