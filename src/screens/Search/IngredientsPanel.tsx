/* eslint-disable prettier/prettier */
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import {MasterHeaderOption} from '../../common/MasterHeaderOption';
import {Chip, IconButton, Searchbar} from 'react-native-paper';
import {RootState, store} from '../../common/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {SearchBarResults} from './SearchBarResults';
import {HorizontalAlignView, RedBorderView, SmallSizeText} from '../../styles';
import {
  typing,
  addIncluded,
  addExcluded,
  removeIncluded,
  removeExcluded,
  resetKeyword,
} from './ingredientSlice';
import {SheetManager, SheetProvider} from 'react-native-actions-sheet';
import '../../../sheets';
import {SelectedIngredients} from './SelectedIngredients';
/*
include 든지 exclude든지 +와 함께 보이는것.
props contians ..
type: 0 for my ingredients, 1 for excluded ingredients
*/
function IngredientsPanel(props: any): JSX.Element {
  const type = props.type;
  // const searchKeyword = useSelector(
  //   (state: RootState) => state.ingredient.text,
  // );
  // const searchResults: string[] = useSelector(
  //   (state: RootState) => state.ingredient.results,
  // );
  // const addedIngredients: string[] = useSelector((state: RootState) =>
  //   type == 0
  //     ? state.ingredient.includedIngredients
  //     : state.ingredient.excludedIngredients,
  // );
  // const dispatch = useDispatch();

  // function onChangeSearch(query: string) {
  //   dispatch(typing({text: query})); //키워드에 따른 text, results 스테이트 업데이트.
  // }
  // const [isSearchBarFocused, setIsSearchBarFocused] = useState<boolean>(false);
  // function onSearchBarResultPressEvent(item: string) {
  //   if (type == 0) {
  //     //add to my ingredients
  //     dispatch(addIncluded({ingredient: item})); //키워드에 따른 text, results 스테이트 업데이트.
  //   } else if (type == 1) {
  //     //add to exlcuded ingredients
  //     dispatch(addExcluded({ingredient: item})); //키워드에 따른 text, results 스테이트 업데이트.
  //   }
  //   dispatch(resetKeyword({}));
  // }
  // function removeIngredient(item: string) {
  //   if (type == 0) {
  //     dispatch(removeIncluded({ingredient: item})); //키워드에 따른 text, results 스테이트 업데이트.
  //   } else if (type == 1) {
  //     dispatch(removeExcluded({ingredient: item})); //키워드에 따른 text, results 스테이트 업데이트.
  //   }
  // }
  const original: string[] = useSelector((state: RootState) =>
  type == 0
    ? state.ingredient.includedIngredients
    : state.ingredient.excludedIngredients,
);
  return (
    <View>
      {/* <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchKeyword.toString()}
        onFocus={() => {
          setIsSearchBarFocused(true);
        }}
        onBlur={() => {
          setIsSearchBarFocused(false);
        }}
        onSubmitEditing={() => {
          // console.log("검색할것", searchKeyword)
        }}
      />
      {isSearchBarFocused && (
        <SearchBarResults
          searchResults={searchResults}
          onPressEvent={onSearchBarResultPressEvent}
        />
      )} */}

      <HorizontalAlignView>
        <SmallSizeText>
          {type == 0 ? 'My Ingredients' : 'Must exclude'}
        </SmallSizeText>
        <IconButton
          icon={'plus'}
          onPress={() => {
            // console.log("hihi");
            SheetManager.show('AddIngredientModal', {payload: {type: type, original:original}});
          }}
        />
      </HorizontalAlignView>
      <SelectedIngredients
        // addedIngredients={addedIngredients}
        // removeIngredient={removeIngredient}
        type={type}
      />
      {/* <RedBorderView
        style={{
          flexWrap: 'wrap',
        }}>
        {addedIngredients.map((item, index) => (
          <Chip
            key={index}
            onPress={() => console.log('Pressed')}
            onClose={() => {
              removeIngredient(item);
            }}>
            {item}
          </Chip>
        ))}
      </RedBorderView> */}
    </View>
  );
}

export default IngredientsPanel;
