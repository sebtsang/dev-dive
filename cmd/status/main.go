package main

import (
	"context"

	"github.com/your-username/devdive/internal/cli"
)

func main() {
	cli.MainBinary("status", func(ctx context.Context, args []string) error {
		statePath, err := cli.ParseStateFlag("status", args)
		if err != nil {
			return err
		}
		return cli.ExecuteStatus(ctx, statePath)
	})
}
