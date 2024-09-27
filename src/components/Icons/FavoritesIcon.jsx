export default function FavoritesIcon({color, hover, hoverColor}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="fi_2961957"
      viewBox="0 0 64 64"
      width="24"
      height="24"
    >
      <g fill={hover ? hoverColor :color}>
      <path d="M45.5,4A18.53,18.53,0,0,0,32,9.86,18.5,18.5,0,0,0,0,22.5C0,40.92,29.71,59,31,59.71a2,2,0,0,0,2.06,0C34.29,59,64,40.92,64,22.5A18.52,18.52,0,0,0,45.5,4ZM32,55.64C26.83,52.34,4,36.92,4,22.5a14.5,14.5,0,0,1,26.36-8.33,2,2,0,0,0,3.27,0A14.5,14.5,0,0,1,60,22.5C60,36.91,37.17,52.33,32,55.64Z"></path>
      </g>
    </svg>
  );
}
