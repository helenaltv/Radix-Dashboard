import { Flex, Text, Box, Card, Table, Grid, Badge } from "@radix-ui/themes";

function Info() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>
            <h3>Recent sales</h3>
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Olivia Martin</Table.RowHeaderCell>
          <Table.Cell>olivia.martin@email.com</Table.Cell>
          <Table.Cell>+$1,999.00</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Jackson Lee</Table.RowHeaderCell>
          <Table.Cell>jackson.lee@email.com</Table.Cell>
          <Table.Cell>+$39.00</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Isabella Nguyen</Table.RowHeaderCell>
          <Table.Cell>isabella.nguyen@email.com</Table.Cell>
          <Table.Cell>+$299.00</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>William Kim</Table.RowHeaderCell>
          <Table.Cell>jackson.lee@email.com</Table.Cell>
          <Table.Cell>+$39.00</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Sofia Davis</Table.RowHeaderCell>
          <Table.Cell>jackson.lee@email.com</Table.Cell>
          <Table.Cell>+$39.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}

export default Info;
