import fs from 'fs'
import path from 'path';

export function check_project_exists(project_name: string) {
    const val = path.resolve(__dirname, "../../Projects")
    const folders = fs.readdirSync(val)
    return folders;
}