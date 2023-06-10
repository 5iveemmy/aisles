import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import bookmark from "@/assets/bookmark.svg"
import bell from "@/assets/bell.svg"

const Header = () => {
  return (
    <Flex
      pt="23px"
      pr="78px"
      justifyContent="end"
      alignItems="center"
      gap="26px"
    >
      <Box>
        <img src={bookmark} alt="" />
      </Box>
      <Box>
        <img src={bell} alt="" />
      </Box>
      <Flex gap="8px" alignItems="center">
        <Avatar
          name="T"
          size="sm"
          bgColor="#111820"
          color="white"
          src="https://bit.ly/tioluwani-kolawole"
        />
        <Text fontSize="15px" fontWeight="600" lineHeight="20px">
          Aisles
        </Text>
      </Flex>
    </Flex>
  )
}

export default Header
