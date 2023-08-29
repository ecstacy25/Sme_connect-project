import React, { useRef, useState, useEffect } from "react";
import { BiHomeAlt, BiChevronDown } from "react-icons/bi";
import GigsCards from "../../components/GigsContents/GigsCards/GigsCards";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../config";
import loader from "../../assets/icons/loader.svg";
import requests from "../../libs/request";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const { search } = useLocation();
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  // Function to update the sorting option and close the dropdown
  const reSort = (types) => {
    setSort(types);
    setOpen(false);
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      Axios.get(
        `${requests.gigs}${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
      ).then((res) => res.data),
  });

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  const newSearch = search.split("?cat=");
  const newCat = newSearch[1];

  const findData =
    data?.length === 0 ? null : data?.find((item) => item?.cat === newCat);

  return (
    <main className="py-40">
      <div className="contain">
        <div className="flex items-start justify-start flex-col gap-4">
          {/* ... Other components ... */}
          <div className="flex md:items-center items-start justify-start gap-2 flex-col md:flex-row">
            {/* ... Budget inputs and apply button ... */}
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-end gap-2">
            <p className="text-base font-normal text-gray-500">Sort by:</p>
            {/* ... Sort dropdown ... */}
          </div>
          <div
            className={`w-full grid-cols-1 sm:grid-cols-2 tab:grid-cols-3 lg:grid-cols-4 items-start justify-start gap-8 ${
              isLoading || error || data?.length === 0 ? "flex" : "grid"
            }`}
          >
            {/* ... Render gig cards or loading/error messages ... */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gigs;
