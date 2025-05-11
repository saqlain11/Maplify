import {APP_TEXT} from '@Maplify/constant';
import {color} from '@Maplify/theme';
import {IDropdownData} from '@Maplify/typing';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Dropdown as DropdownComponent} from 'react-native-element-dropdown';
import {dropdownStyle} from './Dropdown.style';

interface DropDownProps {
  data: IDropdownData[];
  value: number;
  onChange: (item: any) => void;
  onSearch?: (searchedPlace: string) => void;
}

const Dropdown = ({
  data,
  value,
  onChange,
  onSearch = undefined,
}: DropDownProps) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={dropdownStyle.container}>
      <DropdownComponent
        style={[
          dropdownStyle.dropdown,
          isFocus && {borderColor: color.border.ghost},
        ]}
        placeholderStyle={dropdownStyle.placeholderStyle}
        selectedTextStyle={dropdownStyle.selectedTextStyle}
        inputSearchStyle={dropdownStyle.inputSearchStyle}
        iconStyle={dropdownStyle.iconStyle}
        data={data}
        search
        onChangeText={onSearch}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? APP_TEXT.SELECT_ITEM : '...'}
        searchPlaceholder={APP_TEXT.SEARCH}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          onChange(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default React.memo(Dropdown);
