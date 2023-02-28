import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function OrderChart() {
  const [Products, setProducts] = useState([]);

  const getData = async () => {
    let token = JSON.parse(localStorage.getItem("newwave")) || false;
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/purchasehistory/all-orders`,
        {
          headers: {
            authorization: token.token || false,
          },
        }
      );
      let data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const data = [
    {
      name:
        Products.length > 0 && Products[Products.length - 1].productID.title,
      Price:
        Products.length > 0 && Products[Products.length - 1].productID.price,
      Quantity:
        Products.length > 0 && Products[Products.length - 1].productCOUNT,
    },
    {
      name:
        Products.length > 0 && Products[Products.length - 2].productID.title,
      Price:
        Products.length > 0 && Products[Products.length - 2].productID.price,
      Quantity:
        Products.length > 0 && Products[Products.length - 2].productCOUNT,
    },
    {
      name:
        Products.length > 0 && Products[Products.length - 3].productID.title,
      Price:
        Products.length > 0 && Products[Products.length - 3].productID.price,
      Quantity:
        Products.length > 0 && Products[Products.length - 3].productCOUNT,
    },
    {
      name:
        Products.length > 0 && Products[Products.length - 4].productID.title,
      Price:
        Products.length > 0 && Products[Products.length - 4].productID.price,
      Quantity:
        Products.length > 0 && Products[Products.length - 4].productCOUNT,
    },
    {
      name:
        Products.length > 0 && Products[Products.length - 5].productID.title,
      Price:
        Products.length > 0 && Products[Products.length - 5].productID.price,
      Quantity:
        Products.length > 0 && Products[Products.length - 5].productCOUNT,
    },
    {
      name:
        Products.length > 0 && Products[Products.length - 6].productID.title,
      Price:
        Products.length > 0 && Products[Products.length - 6].productID.price,
      Quantity:
        Products.length > 0 && Products[Products.length - 6].productCOUNT,
    },
    {
      name:
        Products.length > 0 && Products[Products.length - 7].productID.title,
      Price:
        Products.length > 0 && Products[Products.length - 7].productID.price,
      Quantity:
        Products.length > 0 && Products[Products.length - 7].productCOUNT,
    },
    {
      name:
        Products.length > 0 && Products[Products.length - 8].productID.title,
      Price:
        Products.length > 0 && Products[Products.length - 8].productID.price,
      Quantity:
        Products.length > 0 && Products[Products.length - 8].productCOUNT,
    },
    {
      name:
        Products.length > 0 && Products[Products.length - 9].productID.title,
      Price:
        Products.length > 0 && Products[Products.length - 9].productID.price,
      Quantity:
        Products.length > 0 && Products[Products.length - 9].productCOUNT,
    },
    {
      name:
        Products.length > 0 && Products[Products.length - 10].productID.title,
      Price:
        Products.length > 0 && Products[Products.length - 10].productID.price,
      Quantity:
        Products.length > 0 && Products[Products.length - 10].productCOUNT,
    },
    {
      name:
        Products.length > 0 && Products[Products.length - 11].productID.title,
      Price:
        Products.length > 0 && Products[Products.length - 11].productID.price,
      Quantity:
        Products.length > 0 && Products[Products.length - 11].productCOUNT,
    },
    {
      name:
        Products.length > 0 && Products[Products.length - 12].productID.title,
      Price:
        Products.length > 0 && Products[Products.length - 12].productID.price,
      Quantity:
        Products.length > 0 && Products[Products.length - 12].productCOUNT,
    },
  ];
  return (
    <Box bg="white" boxShadow="md" p={4} rounded="md">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Quantity"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default OrderChart;
