import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={41}
      height={41}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.1 10.132c-5.467 5.467-5.467 14.331 0 19.799 1.25 1.248 3.384.364 3.384-1.402V13.636a2 2 0 012-2h1.577a2 2 0 012 2v5.009a2 2 0 002 2h4.74a2 2 0 002-2v-5.01a2 2 0 012-2h1.609a2 2 0 012 2v19.247a2 2 0 01-2 2H23.8a2 2 0 01-2-2v-5.7a2 2 0 00-2-2h-4.74a2 2 0 00-2 2v6.525c0 .649-.525 1.175-1.174 1.175H10.58a.633.633 0 00-.447 1.08c5.467 5.467 14.331 5.467 19.799 0l6.03-6.031c5.468-5.468 5.468-14.332 0-19.8l-6.03-6.03c-5.468-5.468-14.332-5.468-19.8 0l-6.03 6.03z"
        fill="#B600AF"
      />
    </Svg>
  );
}

export default SvgComponent;
