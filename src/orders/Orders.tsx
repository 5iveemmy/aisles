import Layout from "@/layout"
import { Box, Flex, Text } from "@chakra-ui/react"
import threeSticks from "@/assets/threeSticks.svg"
import downArrow from "@/assets/downArrow.svg"
import download from "@/assets/download.svg"

const Orders = () => {
  return (
    <Layout>
      <Flex justifyContent="space-between" pb="10px">
        <Text fontSize="23px" fontWeight="700" lineHeight="32px">
          Orders
        </Text>
        <Flex gap="16px">
          <Flex
            p="7px"
            bgColor="#f0f0f0"
            borderRadius="10px"
            height="38px"
            width="131px"
            alignItems="center"
            gap="13px"
          >
            <img src={threeSticks} alt="" />
            <Text
              fontSize="14px"
              lineHeight="18px"
              fontWeight="700"
              color=" #353542"
            >
              Today
            </Text>
            <Box>
              <img src={downArrow} alt="Down arrow icon" />
            </Box>
          </Flex>
          <Flex
            bgColor="#018992"
            borderRadius="10px"
            p="10px 15px"
            alignItems="center"
            justifyContent="center"
          >
            <img src={download} alt="download icon" />
          </Flex>
        </Flex>
      </Flex>
      <Flex bg="white" py="23px" px="50px" borderRadius="5px">
        <Box borderRight="1px solid #d7d7d8" pr="102px">
          <Text
            fontSize="13px"
            color="#343538"
            fontWeight="500"
            lineHeight="24px"
            opacity="0.5"
            pb="8px"
          >
            Total Order Amount
          </Text>
          <Text
            fontSize="26px"
            fontWeight="700"
            lineHeight="32px"
            color="#000000"
          >
            N 0.00
          </Text>
        </Box>
        <Box borderRight="1px solid #d7d7d8" pr="106px" pl="40px">
          <Text
            fontSize="13px"
            color="#343538"
            fontWeight="500"
            lineHeight="24px"
            opacity="0.5"
            pb="8px"
          >
            Deliverd Orders
          </Text>
          <Text
            fontSize="26px"
            fontWeight="700"
            lineHeight="32px"
            color="#000000"
          >
            654
          </Text>
        </Box>
        <Box borderRight="1px solid #d7d7d8" pr="114px" pl="40px">
          <Text
            fontSize="13px"
            color="#343538"
            fontWeight="500"
            lineHeight="24px"
            opacity="0.5"
            pb="8px"
          >
            Pending Orders
          </Text>
          <Text
            fontSize="26px"
            fontWeight="700"
            lineHeight="32px"
            color="#000000"
          >
            34
          </Text>
        </Box>
        <Box pl="40px">
          <Text
            fontSize="13px"
            color="#343538"
            fontWeight="500"
            lineHeight="24px"
            opacity="0.5"
            pb="8px"
          >
            Cancelled Orders
          </Text>
          <Text
            fontSize="26px"
            fontWeight="700"
            lineHeight="32px"
            color="#000000"
          >
            34
          </Text>
        </Box>
      </Flex>
    </Layout>
  )
}

export default Orders
