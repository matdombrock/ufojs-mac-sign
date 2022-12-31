export default {
	cmd: 'mac-find-id',
	help: 'iss - Checks the location of the international space station',
	async script(args, ufo, tools){
		const {$} = tools;
        await $`security find-identity -v -p codesigning`;
	}
}