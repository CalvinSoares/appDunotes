import { FieldError } from 'react-hook-form'
import { TextInput, TextInputProps } from 'react-native'
import theme, { Box, Text } from 'utils/theme'

type InputProps = {
    label: string
    error?: FieldError | undefined
} & TextInputProps

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <Box flexDirection='column'  width="auto" my='6'>
      <TextInput 
        style={{
            paddingVertical: 16,
            paddingLeft: 30,
            borderBottomWidth: 2,
            color: theme.colors.gray250,
            borderColor: error ? theme.colors.rose500 : theme.colors.grey,
            borderRadius: theme.borderRadii["rounded-7xl"]
        }}
        placeholder={label}
        placeholderTextColor={theme.colors.gray250}
        {...props}
      />
      {error && (
        <Text mt="3.5" color="rose500">
          {label} is required
        </Text>
      )}
    </Box>
  )
}

export default Input