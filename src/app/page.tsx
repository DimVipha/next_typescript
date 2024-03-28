import CardUserComponent from "@/components/cards/CardUserComponent";
import { UserType } from "@/types/users";
import { Suspense } from "react";
import LoadingComponent from "./loading";

async function fetchUser() {
  const user = await fetch("https://dummyjson.com/users?limit=20", {
    cache: "no-store"
  });
  const res = await user.json();
  return res.users;
}

export default async function Home() {
  const user = await fetchUser();

  return (
    <>
       <div className="flex justify-center gap-5">
       <h1 className="font-bold text-large">Hello everyone</h1>
        <h1 className="font-bold text-large">សួរស្តី​​​ អតិថិជន ជាទីស្រលាញ់ </h1>
        <h1 className="font-kantumruy">ជម្រាបសួរ អ្នកគ្រូ</h1>
       </div>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        
​​​​​​
        <Suspense fallback={<LoadingComponent/>} >
        {user?.map((user: UserType) => (
          <CardUserComponent
            image={user.image}
            firstName={user.firstName}
          
            key={user.id}
          />
        ))}
        </Suspense>
      </div>
    </>
  );
}
