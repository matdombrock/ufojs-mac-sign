export default {
	cmd: 'mac-find-id',
	help: 'mac-find-id - Finds the locally installed developr IDs',
	async script(args, ufo, tools){
		const {$} = tools;
        await $`security find-identity -v -p codesigning`;
	}
}