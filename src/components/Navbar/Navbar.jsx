import { useNavigate, Outlet, Link } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import { ErrorSpan, ImageLogo, InputSpace, Nav } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";

const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "Campo não pode ser vazio " })
    .refine((value) => !/^\s*$/.test(value), {
      message: " A pesquisa não pode ser vazia ",
    }),
});

export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(searchSchema) });

  const Navigate = useNavigate();

  const onSearch = (data) => {
    const { title } = data;
    Navigate(`/search/${title}`);
    reset();
  };

  function goAuth() {
    Navigate("/auth");
  }

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
            <button>
              <i className="bi bi-search"></i>
            </button>

            <input
              {...register("title")}
              type="text"
              placeholder="Pesquise por um título"
            />
          </InputSpace>
        </form>

        <Link to="/">
          <ImageLogo src={logo} alt="Logo do Breaking News" />
        </Link>

        <Link to="/auth">
          <Button onClick={goAuth}>Entrar</Button>
        </Link>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
