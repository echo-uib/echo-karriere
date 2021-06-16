import { ReactNode, TdHTMLAttributes } from "react";

interface ItemProps {
  title: string;
  time: string;
}

const Item = ({ title, time }: ItemProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center p-1 md:p-2">
      <h4>{title}</h4>
      <p className="text-gray-600 font-bold">{time}</p>
    </div>
  );
};

interface TDProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
  children: ReactNode;
  bg: string;
}

const Td = ({ children, bg, ...props }: TDProps): JSX.Element => (
  <td className={`md:py-2 md:px-4 rounded transition-opacity ${bg}`} {...props}>
    {children}
  </td>
);

export const Schedule = (): JSX.Element => {
  return (
    <table
      className="table-fixed border-separate"
      style={{ borderSpacing: "2px" }}
    >
      <tbody>
        <tr>
          <th />
          <Td colSpan={3} rowSpan={4} bg="bg-c2">
            <Item
              title="Introduksjon og lynpresentasjoner"
              time="10:00-11:15"
            />
          </Td>
        </tr>
        <tr>
          <th />
        </tr>
        <tr>
          <th />
        </tr>
        <tr>
          <th />
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Bekk" time="11:20-11:50" />
          </Td>
          <Td rowSpan={4} bg="bg-c5">
            <Item title="Workshop: Kantega" time="11:30-13:30" />
          </Td>
          <Td rowSpan={7} bg="bg-c2">
            <Item title="Standrom åpner" time="11:15-16:00" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td colSpan={1} bg="bg-c1">
            <Item title="Knowit" time="12:00-12:30" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Tripletex" time="12:40-13:10" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Capgemini" time="13:20-13:50" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Iterate" time="14:00-14:30" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="Workshop: Equinor" time="13:45-15:45" />
          </Td>
          <td></td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Bouvet" time="14:40-15:10" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="NSM" time="15:20-15:50" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td colSpan={4} bg="bg-c4">
            <Item title="Karrieredag over" time="16:00" />
          </Td>
        </tr>
      </tbody>
    </table>
  );
};
