import type { FC } from "react";
import { useParams } from "react-router-dom";
import { usePlace } from "../../service";
import Loader from "../../components/loader";
import Error from "./../../components/error/index";
import Container from "./../../components/detail/container";
import Image from "../../components/detail/image";
import Info from "../../components/detail/info";
import Button from "./../../components/detail/button";

const Detail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error, refetch } = usePlace(id);

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error info={error.message} refetch={refetch} />
      </Container>
    );

  if (!data) return null;
  return (
    <Container>
      <Image image={data.image_url} />
      <Info place={data} />
      <Button id={String(data.id)} />
    </Container>
  );
};

export default Detail;
