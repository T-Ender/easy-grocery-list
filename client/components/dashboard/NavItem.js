import React from 'react';
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';

export default function NavItem({
  icon,
  title,
  description,
  active,
  navSize,
  onClick,
  path,
}) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize == 'small' ? 'center' : 'flex-start'}
      onClick={onClick}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && 'blue.400'}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
          w={navSize == 'large' && '100%'}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? '#82AAAD' : 'gray.500'}
              />
              <Text ml={5} display={navSize == 'small' ? 'none' : 'flex'}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
