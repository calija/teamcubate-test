import React, {useState} from 'react';

import DropDownIcon from '../../../../../assets/svg/icn_dropdown.svg';

import {Button, Picker, PopUpModal} from '../../../../components';
import {PickerList} from '../PickerList';
import {ACTIVITY_DURATION} from '../../../../config';

type Props = {
  selectedActivityDuration: number;
  onChange: (i: number) => void;
};

export const ActivityDurationPicker = ({
  selectedActivityDuration,
  onChange,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pickerListData = ACTIVITY_DURATION.map(item => ({
    id: item.toString(),
    value: `${item} min`,
  }));

  return (
    <>
      <Picker
        label="How long do you want to do this activity?"
        value={`${selectedActivityDuration} min`}
        Icon={DropDownIcon}
        onPress={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <PopUpModal headerTitle="Pick activity duration" visible={true}>
          <PickerList
            data={pickerListData}
            selectedId={selectedActivityDuration.toString()}
            onPress={i => {
              onChange(Number(i.id));
            }}
          />
          <Button onPress={() => setIsModalOpen(false)}>Close</Button>
        </PopUpModal>
      )}
    </>
  );
};
