import {useState, useEffect} from "react";

export function useLocalStorage<T>(key: string, initialValue: T){
	const [value, setValue] = useState<T>(()=>{
		const savedItem = localStorage.getItem(key);
		return savedItem ? JSON.parse(savedItem) :initialValue;
	});
	useEffect(()=>{
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value])
return [value, setValue] as const
}