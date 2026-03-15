package main

import (
	"context"

	"github.com/your-username/devdive/internal/cli"
)

func main() {
	cli.MainBinary("readme-sync", func(ctx context.Context, args []string) error {
		statePath, err := cli.ParseStateFlag("readme-sync", args)
		if err != nil {
			return err
		}
		return cli.ExecuteReadmeSync(ctx, statePath)
	})
}
