package main

import (
	"context"

	"github.com/your-username/devdive/internal/cli"
)

func main() {
	cli.MainBinary("sync", func(ctx context.Context, args []string) error {
		statePath, err := cli.ParseStateFlag("sync", args)
		if err != nil {
			return err
		}
		return cli.ExecuteSync(ctx, statePath)
	})
}
