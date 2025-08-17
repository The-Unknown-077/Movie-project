import { memo, type FC } from 'react';
import AllActors from '../components/AllActors';
import { useCast } from '../../cast/service/useCast';

interface Props {
  id: number;
}

const CastDetail: FC<Props> = ({ id }) => {

  const { getActor } = useCast({page: 1, without_genres: "10749,36,18,99,27"});
  const { data } = getActor(id, "credits");

  return (
    <div className="CastDetail">
      <AllActors data={data?.cast}/>
    </div>
  );
};

export default memo(CastDetail);