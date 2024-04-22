import { Pressable } from 'react-native'
import { Box, Text } from 'utils/theme'

type ButtonProps = {
  label: string
  onPress: () => void
  disabled?: boolean
  uppercase?: boolean
}

const ButtonComponent = ({ label, onPress, disabled, uppercase }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <Box bg={disabled ? "gray600" : "primary"} py='3.5' borderRadius='rounded-3xl'>
        <Text 
          variant='textXs' 
          fontWeight='700' 
          color='gray100' 
          textAlign='center'
          textTransform={uppercase ? "uppercase" : "none"}
        >
          {label}
        </Text>
      </Box>
    </Pressable>
  )
}

export default ButtonComponent