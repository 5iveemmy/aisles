import { Flex } from "@chakra-ui/react"

interface Props {
  icon: string
  bgColor: string
}

const IconBox = ({ icon, bgColor }: Props) => {
  return (
    <Flex
      bgColor={bgColor}
      borderRadius="10px"
      p="10px 15px"
      alignItems="center"
      justifyContent="center"
    >
      <img src={icon} alt="download icon" />
    </Flex>
  )
}

export default IconBox
