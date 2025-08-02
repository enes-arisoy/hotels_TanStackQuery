import { type FC } from "react";
import { usePlaces } from "../../service";
import { SORT_OPTIONS } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";


const Filter: FC = () => {
  const { data } = usePlaces({});
  const [searchParams, setSearchParams] = useSearchParams();

  // inputtaki değeri url'e parametre olarak eklemek için
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  // inputları ve url i temizle
  const handleReset = () => {
    setSearchParams({});
  };

  // locationları unique olarak almak için konum değerlerinden oluşan benzersiz bir dizi
  const locations = [...new Set(data?.map((item) => item.location))];
  return (
    <form
      onReset={handleReset}
      className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky lg:top-10"
    >
      <div className="field">
        <label>Where do you want to go?</label>
        <select name="location" className="input" onChange={handleChange}>
          <option value="">Select Location</option>
          {locations.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>Search by location</label>

        <input
          name="title"
          onChange={handleChange}
          type="text"
          className="input"
          placeholder="etc: Mountain Resort"
        />
      </div>

      <div className="field">
        <label>Search by</label>
        <select name="order" className="input" onChange={handleChange}>
          <option value="">Select</option>
          {SORT_OPTIONS.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="reset"
        className="bg-blue-500 hover:bg-blue-600 transition text-white mt-3 p- cursor-pointer rounded-md"
      >
        Reset
      </button>
    </form>
  );
};

export default Filter;
