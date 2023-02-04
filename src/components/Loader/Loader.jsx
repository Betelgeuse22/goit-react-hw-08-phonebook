import CircleLoader from 'react-spinners/CircleLoader';
import { LoaderWrap } from './Loader.styled';

export function Loader() {
  return (
    <LoaderWrap>
      <CircleLoader color="lightgreen" size={200} />
    </LoaderWrap>
  );
}
