import { saveToStorage } from "./auth.helper";
import { IAuthResponse, IEmailPassword } from "@/store/user/user.interface";
import axios from "axios";
import Cookies from "js-cookie";
import { instance } from "@/api/api.interceptor";
import { getContentType } from "@/api/api.helper";

export const AuthService = {
	// async main(type: "login" | "register", data: IEmailPassword) {
	// 	const response = await instance.post
	// },
	// async login(data: IEmailPassword) {
	// 	const response = await instance.post("/auth/login", data);
	// },

	async main(type: "login" | "register", data: IEmailPassword) {
		const response = await instance<IAuthResponse>({
			url: `/auth/${type}`,
			method: "POST",
			data,
		});

		if (response.data.accessToken) saveToStorage(response.data);

		return response.data;
	},

	async getNewTokens() {
		const refreshToken = Cookies.get("refreshToken");

		const response = await axios.post<string, { data: IAuthResponse }>(
			process.env.SERVER_URL + "/auth/login/access-token",
			{ refreshToken },
			{ headers: getContentType() },
		);

		if (response.data.accessToken) saveToStorage(response.data);

		return response;
	},
};
