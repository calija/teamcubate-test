import React, {useCallback, useState} from 'react';
import dayjs from 'dayjs';

import DropDownIcon from '../../../../../assets/svg/icn_dropdown.svg';

import {Button, Picker, PopUpModal} from '../../../../components';
import {PickerItemModel, PickerList} from '../PickerList';
import {useAppSelector} from '../../../../store/hooks';
import {getFreeActivitySlotsSelector} from '../../../../store/slices/activity/selectors';

import {FreeSlot} from '../../../../store/slices/activity';

type Props = {
  placeholder?: string;
  selectedActivityTimeId?: FreeSlot['start'];
  onChange: (i: FreeSlot) => void;
};

export const ActivityTimePicker = ({
  selectedActivityTimeId,
  onChange,
  placeholder,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const freeActivitySlots = useAppSelector(getFreeActivitySlotsSelector);

  const pickerListData: PickerItemModel[] = freeActivitySlots.map(item => ({
    id: item.start,
    value: dayjs(item.start).format('dddd, MMMM D, h:mm a'),
  }));

  const selectedFreeSlot = useCallback(
    (pickedItem: PickerItemModel): FreeSlot => {
      const res = freeActivitySlots.find(
        i => i.start === pickedItem.id,
      ) as FreeSlot;
      return res;
    },
    [freeActivitySlots],
  );

  return (
    <>
      <Picker
        label="When do you want to do this activity?"
        value={
          selectedActivityTimeId
            ? dayjs(selectedActivityTimeId).format('dddd, MMMM D, h:mm a')
            : placeholder
            ? placeholder
            : ''
        }
        Icon={DropDownIcon}
        onPress={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <PopUpModal headerTitle="Pick activity time" visible={true}>
          <PickerList
            data={pickerListData}
            selectedId={selectedActivityTimeId}
            onPress={i => {
              onChange(selectedFreeSlot(i));
            }}
          />
          <Button onPress={() => setIsModalOpen(false)}>Close</Button>
        </PopUpModal>
      )}
    </>
  );
};
