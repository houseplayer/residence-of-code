import { Action, ListElement } from '@/types';
import ListItem from './ListItem';

export interface Props {
  data: ListElement[];
  setOptimisticData: (action: { action: Action; user: ListElement }) => void;
}

const List = ({ data, setOptimisticData }: Props) => {
  return (
    <div className="mb-4">
      <div className="items-center py-1 border-b-1 border-black hidden sm:flex">
        <p className="basis-1/3">created</p>
        <p className="basis-1/3">email</p>
        <p className="basis-1/3">password</p>
        <p className="basis-1/12"></p>
      </div>
      {data?.map((listElement: ListElement) => (
        <ListItem
          key={listElement.id}
          listElement={listElement}
          setOptimisticData={setOptimisticData}
        />
      ))}
    </div>
  );
};

export default List;
