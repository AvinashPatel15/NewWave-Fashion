import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Input,
  ListItem,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const AllFilters = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5000);

  return (
    <>
      <Button
        leftIcon={<HamburgerIcon />}
        colorScheme="purple"
        onClick={onOpen}
      >
        Filters
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">All Filters</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <UnorderedList listStyleType={"none"}>
                  <ListItem fontSize={"1.1rem"} fontWeight={500}>
                    Categories
                  </ListItem>
                  <UnorderedList listStyleType={"none"}>
                    <ListItem>
                      <Checkbox>Jacket</Checkbox>
                    </ListItem>
                    <ListItem>
                      <Checkbox>Jeans</Checkbox>
                    </ListItem>
                    <ListItem>
                      <Checkbox>Shirts</Checkbox>
                    </ListItem>
                    <ListItem>
                      <Checkbox>Shorts</Checkbox>
                    </ListItem>
                    <ListItem>
                      <Checkbox>TShirts</Checkbox>
                    </ListItem>
                    <ListItem>
                      <Checkbox>Casual Shoes</Checkbox>
                    </ListItem>
                    <ListItem>
                      <Checkbox>Slippers & Flip Flop</Checkbox>
                    </ListItem>
                    <ListItem>
                      <Checkbox>Formal Shoes</Checkbox>
                    </ListItem>
                    <ListItem>
                      <Checkbox>Sports Shoes</Checkbox>
                    </ListItem>
                    <ListItem>
                      <Checkbox>Sneakers</Checkbox>
                    </ListItem>
                  </UnorderedList>
                </UnorderedList>
              </Box>

              <Box>
                <UnorderedList listStyleType={"none"}>
                  <ListItem fontSize={"1.1rem"} fontWeight={500}>
                    Discount
                  </ListItem>
                  <UnorderedList listStyleType={"none"}>
                    <ListItem>
                      <Checkbox>10% Or Above</Checkbox>
                    </ListItem>
                    <ListItem>
                      <Checkbox>20% Or Above</Checkbox>
                    </ListItem>
                    <ListItem>
                      <Checkbox>30% Or Above</Checkbox>
                    </ListItem>
                    <ListItem>
                      <Checkbox>40% Or Above</Checkbox>
                    </ListItem>
                  </UnorderedList>
                </UnorderedList>
              </Box>

              <Box>
                <Heading fontSize={"1.1rem"} textAlign={"center"}>
                  Price
                </Heading>
                <Box w="70%" margin={"auto"} mt="10px">
                  <Box gap={"10px"} display={"flex"}>
                    <Input
                      border={"1px solid"}
                      type="number"
                      value={min}
                      onChange={(e) => setMin(e.target.value)}
                    />
                    <Input
                      border={"1px solid"}
                      type="number"
                      value={max}
                      onChange={(e) => setMax(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <RangeSlider
                      onChange={(val) => (setMin(val[0]), setMax(val[1]))}
                      aria-label={["min", "max"]}
                      defaultValue={[min, max]}
                      max="5000"
                    >
                      <RangeSliderTrack bg="purple.400">
                        <RangeSliderFilledTrack />
                      </RangeSliderTrack>
                      <RangeSliderThumb bg={"purple.400"} index={0} />
                      <RangeSliderThumb bg={"purple.400"} index={1} />
                    </RangeSlider>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="purple" onClick={onClose}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AllFilters;
