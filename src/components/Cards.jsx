import { Card, Flex, Box, Text, Strong } from "@radix-ui/themes";
const Cards = ({ title, amount, info }) => {
  return (
    <Card style={{ maxWidth: 240 }}>
      <Flex gap="3" align="center">
        <Box>
          <div>
            <Text>{title}</Text>
          </div>
          <div>
            <Text>
              <Strong>{amount}</Strong>
            </Text>
          </div>
          <div>
            <Text>{info}</Text>
          </div>
        </Box>
      </Flex>
    </Card>
  );
};
export default Cards;
